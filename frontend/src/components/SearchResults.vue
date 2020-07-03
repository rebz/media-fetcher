<template>
    <div class="project-list">
        <template v-if="list.length">
            <media-preview
				class="item"
                :media="media"
                v-for="(media, index) in list"
                :key="`media-preview-${media.id}`"
            />
        </template>
    </div>
</template>

<script>
import { useSearchStore } from "/@/store/consumer";
import { computed } from "vue";
import MediaPreview from "/@/components/MediaPreview.vue";

export default {
    components: {
        MediaPreview
    },
    setup() {
        const { searchState } = useSearchStore();

        const list = computed(() => {
            return searchState.results;
        });

        return {
            list
        };
    }
};
</script>

<style lang="scss" scoped>
:root {
   --gutter: 5%;
   --bg-color: #edf2f7; // bg-gray-200
   --speed: 0.3s;
}
.project-list { // inspired by https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585
   display: grid;
   grid-gap: calc(var(--gutter) * 1.5 + 1vw);
   grid-template-columns: 9%;
   grid-template-rows: minmax(10rem, 1fr);
   grid-auto-flow: column;
   grid-auto-columns: 80%; // small viewports
   @media (min-width: 800px) {
      // grid-auto-columns: calc(var(--gutter) * 12);
   }
   overflow-x: scroll;
   scroll-snap-type: x proximity;
   scroll-snap-points-x: repeat(100%);
   scroll-snap-type: mandatory;
   scroll-snap-destination: 100% 0%;
   padding-bottom: calc(.75 * var(--gutter));
   margin-bottom: calc(-.25 * var(--gutter));
   -webkit-overflow-scrolling: touch;
   &::-webkit-scrollbar {
      display: none;
   }
   @media (min-width: 800px) { // yeah make this large-viewport only
      &:hover {
         .item {
            opacity: 0.6;
            filter: blur(2px);
            // transition-delay: 0.3s;
         }
      }
   }
}
.project-list:before,
.project-list:after {
   content: '';
   width: 7.5%;
}
.item {
   scroll-snap-align: center;
   padding: calc(var(--gutter) / 2 * 1.5);
   transition: all var(--speed);
   &:hover {
      opacity: 1 !important;
      filter: blur(0) !important;
      .flag {
         transform: translate3d(4rem, -4rem, 0) rotate(45deg); // greater the offset value here, smaller the 'tag' is
      }
   }
}
.item:nth-last-child {
   margin-right: 5rem;
}
</style>