<template>
    <div class="media-list">
        <template v-if="list.length">
            <media-preview
                @click.native="selectMedia(media.id, media.type)"
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
import { computed, watch, onMounted } from "vue";
import MediaPreview from "/@/components/MediaPreview.vue";

export default {
    components: {
        MediaPreview
    },
    setup() {
        const { searchState, selectMedia } = useSearchStore();

		// list container element
		let mediaList = undefined
		onMounted(() => {
			mediaList = document.querySelector('.media-list')
		})

        const list = computed(() => {
            return searchState.results;
		});

		watch(list, (newVal, oldVal) => {
			if (mediaList) mediaList.scrollLeft = 0
		})


		/**
		 * IntersectionObserver Setup
		 */
		let observer = undefined
		let observerState = false

		const destroyObserver = () => {
			observer.disconnect()
		}

		const initObserver = () => {

			// disconnect observer if already set
			if (!!observer) destroyObserver()

			const callback = (entries, observer) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('in-view')
					} else {
						entry.target.classList.remove('in-view')
					}
				});
			}

			// init observer w/ options
			observer = new IntersectionObserver(callback, {
				root: mediaList,
				rootMargin: "32px",
				threshold: 0.6
			});

			// define what we're watching
			const item = document.querySelectorAll('.item').forEach(el => {
				observer.observe(el);
			});
		}

		// if list changes update observer
		watch(() => list.value, (newVal, oldVal) => {
			if (newVal.length && !observerState) initObserver()
			else destroyObserver()
		})
		
        return {
            list,
			selectMedia,
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
.media-list {
    // inspired by https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585
    display: grid;
    grid-gap: calc(var(--gutter) * 1.5 + 1vw);
    grid-template-columns: 15%;
    grid-template-rows: minmax(10rem, 1fr);
    grid-auto-flow: column;
	direction: ltr;
    grid-auto-columns: 70%; // small viewports
    overflow-x: scroll;
    scroll-snap-type: x proximity;
    scroll-snap-points-x: repeat(100%);
    scroll-snap-type: mandatory;
    scroll-snap-destination: 100% 0%;
    padding-bottom: calc(0.75 * var(--gutter));
    margin-bottom: calc(-0.25 * var(--gutter));
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
        display: none;
    }
}

.media-list:before,
.media-list:after {
    content: "";
    width: 30%;
}

.item {
    scroll-snap-align: center;
    padding: calc(var(--gutter) / 2 * 1.5);
	transform: scale(.7);
	transition: all 300ms ease;

	&.in-view {
		transform: scale(1);
	}
}

</style>