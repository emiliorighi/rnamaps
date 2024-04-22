<template>
    <div>
        <va-affix :offset-top="0">
            <VaNavbar color="primary" class="mb-3">
                <template #left>
                    <VaNavbarItem class="logo">
                        RNAmaps
                    </VaNavbarItem>
                </template>
                <template #right>
                    <VaNavbarItem class="hidden sm:block">
                        <VaChip color="textInverted" flat :to="{name: 'samples'}">
                            Samples
                        </VaChip>
                    </VaNavbarItem>
                    <VaNavbarItem class="hidden sm:block">
                        <VaChip color="textInverted" flat :to="{name: 'expression-profiles'}">
                            Expression Profiles
                        </VaChip>
                    </VaNavbarItem>
                    <VaNavbarItem class="hidden sm:block">
                        <VaChip color="textInverted" flat :to="{name: 'jbrowse2'}">
                            Genome Browser
                        </VaChip>
                    </VaNavbarItem>
                </template>
            </VaNavbar>
        </va-affix>
    </div>
</template>
<script setup>

</script>

<style>
.navbar-container {
    height: 100px;
}
</style>