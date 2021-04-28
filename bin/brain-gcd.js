#!/usr/bin/env node
import userGreeting, { getUserName } from '../src/cli.js';
import { brainGame } from '../src/index.js';
import { getQuestionInGcdGame, getCorrectAnswer, gameTask } from '../games/gcdivisor.js';

userGreeting();

gameTask();

brainGame(getQuestionInGcdGame, getCorrectAnswer, getUserName);
