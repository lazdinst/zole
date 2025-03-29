# Zole Game Server Architecture

This document outlines the server-side folder structure and explains the purpose of each section to help maintain separation of concerns and keep the system modular and testable.

---

## Directory Structure

```
/server
├── index.ts
│   Entry point — initializes HTTP and WebSocket servers

├── config/
│   gameRules.ts
│   Central place for game constants like max players, turn timeout, etc.

├── core/
│   Game.ts
│     Holds the state of a single game instance (no logic)
│   GameManager.ts
│     Manages multiple active game instances in memory

│   logic/
│     roundLogic.ts        Turn handling and round resolution
│     scoringLogic.ts      Point calculation at game end
│     playValidation.ts    Move validation based on game rules
│     playerLogic.ts       Join/leave logic, dealer rotation

│   actions/
│     joinGame.ts          Ties together game + logic + state for joining
│     playCard.ts          Ties together game + logic + state for playing

│   state/
│     GameStore.ts         Interface for game storage
│     InMemoryGameStore.ts Simple in-memory implementation
│     RedisGameStore.ts    Redis-backed implementation

│   types/
│     session.ts           Types for sessions, internal-only data
│     enums.ts             Internal enums (e.g. GamePhase)

│   utils/
│     shuffle.ts           Fisher-Yates shuffle
│     scoring.ts           Helpers for scoring

│   errors/
│     GameError.ts         Base error class
│     ValidationError.ts   Thrown when a move is invalid

├── socket/
│   socketServer.ts        WebSocket setup
│   router.ts              Event dispatcher (type → handler)
│   connectionManager.ts   Tracks socket <-> playerId mappings
│   context.ts             Optional shared object passed to all handlers
│   events.ts              Socket event name/type definitions

│   eventHandlers/
│     handleJoinGame.ts    Event handler for joining a game
│     handlePlayCard.ts    Event handler for playing a card

│   middleware/
│     verifySession.ts     Validates session before running handler

├── redis/
│   redisClient.ts         Redis connection setup
│   playerSessionStore.ts  Stores reconnect data

├── auth/
│   guest.ts               Guest user ID creation
│   sessionManager.ts      Links socket to persistent player identity

├── utils/
│   logger.ts              Unified logging
│   errorHandler.ts        Error formatting

├── types.ts               Global types (optional)
├── constants.ts           Shared values and enums
└── env.d.ts               Typed environment variables
```

---

## Principles

- Core game logic is isolated in `/core/` and has no WebSocket or HTTP knowledge.
- Socket handlers are minimal: they only route messages and call `actions`.
- Game actions orchestrate core logic and persistence.
- All logic is unit-testable and modular.
- Redis is used to persist game state and player session data.
- Use this layout to stay consistent and avoid growing a "god file" or tightly coupled logic.

---

```
Always keep the game logic decoupled from delivery mechanism.
Test it like a library. Use it like a service.
```
