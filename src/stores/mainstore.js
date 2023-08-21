import { writable } from 'svelte/store';

export const accountsIsOpen = writable(false);

export const menuOpen = writable(false);
export function toggleMenu() {
	menuOpen.update((state) => !state);
}

export const conversationSelected = writable(false);
export const openedComponentsStack = writable([]);
export const sendMessageStore = writable(null);
export const scrollToBottomStore = writable(null);
