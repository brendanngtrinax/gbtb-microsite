import { writable } from "svelte/store";
import { EnvironmentCategories } from "./lib/types";
export let name = writable(""); // might resort to caching this in the future.
export let environmentCategory = writable(EnvironmentCategories.NULL);
export let templateChoice = writable("");
