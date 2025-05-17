import { writable } from "svelte/store";
import { EnvironmentCategories } from "./types";
export let environmentCategory = writable(EnvironmentCategories.NULL);
