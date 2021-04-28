#!/usr/bin/env node
import userGreeting, { getUserName } from '../src/cli.js';
import { brainGame } from '../src/index.js';
import { getQuestionInPrimeGame, getCorrectAnswer, gameTask } from '../games/prime.js';

userGreeting();

gameTask();

brainGame(getQuestionInPrimeGame, getCorrectAnswer, getUserName);
