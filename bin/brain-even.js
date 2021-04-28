#!/usr/bin/env node
import userGreeting, { getUserName } from '../src/cli.js';
import { brainGame } from '../src/index.js';
import { gameTask, getCorrectAnswer, getQuestionInEvenGame } from '../games/even.js';

userGreeting();

gameTask();

brainGame(getQuestionInEvenGame, getCorrectAnswer, getUserName);
