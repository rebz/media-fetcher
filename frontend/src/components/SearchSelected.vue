<template>
    <div class="">
        selected result
        <br>
        <br>
        {{ hasSelectedSearch }}
        <br>
        <br>
        {{ status }}
        <br>
        <br>
        media: {{ media || 'not found' }}
    </div>
</template>

<script>
    import { computed, watch } from "vue";
    import { useSearchStore } from "/@/store/consumer";
    import { useMediaStore } from "/@/store/consumer";
    import { MEDIA_STATUS } from "/@/store/types";
    import { objectDiff } from "/@/lib/object";
    
    export default {

        setup() {
            const { hasSelectedSearch } = useSearchStore();
            const { mediaState, getMedia } = useMediaStore();

            watch(hasSelectedSearch.value, (newVal, oldVal) => {
                if (newVal && objectDiff(newVal)) {
                    getMedia(newVal.id, newVal.type)
                }
            })

            const media = computed(() => mediaState.media);

            return {
                media,
                hasSelectedSearch,
                status: mediaState.status,
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>