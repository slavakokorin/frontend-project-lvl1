#!/usr/bin/env node
import userGreeting, { getUserName } from '../src/cli.js';
import { brainGame } from '../src/index.js';
import { getQuestionInProgressionGame, getCorrectAnswer, gameTask } from '../games/progression.js';

userGreeting();

gameTask();

brainGame(getQuestionInProgressionGame, getCorrectAnswer, getUserName);
