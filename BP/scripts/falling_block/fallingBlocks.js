import { world, BlockPermutation, ItemStack } from '@minecraft/server';

function dropFallingBlock(blockId, dimension, location) {
    const centerLocation = { x: location.x + 0.5, y: location.y + 0.5, z: location.z + 0.5 };
    if (world.gameRules.doEntityDrops) dimension.spawnItem(new ItemStack(blockId), centerLocation);
    dimension.spawnParticle(`${blockId}.break_particle`, centerLocation);
}

export const FallingBlocks = {
    'techcraftfe:salt_block': {}
}