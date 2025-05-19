import { writable } from "svelte/store";
import { EnvironmentCategories } from "./types";
export let environmentCategory = writable(EnvironmentCategories.NULL);
export const avatarImgPaths = [
  "/avatars/otter.png",
  "/avatars/dragonfly.png",
  "/avatars/supertree.png",
  "/avatars/tree.png",
  "/avatars/fruit.png",
  "/avatars/flower.png",
];
export const backgroundImgPaths = [
  "/backgrounds/blue.png",
  "/backgrounds/lightblue.png",
  "/backgrounds/blue.png",
  "/backgrounds/lightblue.png",
  "/backgrounds/blue.png",
  "/backgrounds/lightblue.png",
];
