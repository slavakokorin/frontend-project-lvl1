#!/usr/bin/env node
import userGreeting, { getUserName } from '../src/cli.js';
import { brainGame } from '../src/index.js';
import { getCorrectAnswer, getQuestionInCalcGame, gameTask } from '../games/calculate.js';

userGreeting();

gameTask();

brainGame(getQuestionInCalcGame, getCorrectAnswer, getUserName);
