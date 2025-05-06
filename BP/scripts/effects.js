import { world } from "@minecraft/server";

const ItemFoodEffectsComponent = {
	onConsume({ itemStack, source }) {
		source.removeEffect('poison');
		source.removeEffect('hunger');
		source.removeEffect('nausea');
	}
};

world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
	itemComponentRegistry.registerCustomComponent("techcraftfe:remove_bad_effects", ItemFoodEffectsComponent);
});