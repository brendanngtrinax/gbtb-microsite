import { writable, type Writable } from "svelte/store";
import { EnvironmentCategories } from "./types";
export const environmentCategory = writable(EnvironmentCategories.NULL);
export const name = writable("");
export const answerWidths = writable<string[]>([]);
export const selectedAnswers = writable<never[] | number[]>([]);
