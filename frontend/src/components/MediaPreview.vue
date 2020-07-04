<template>
    <div :id="`media-${media.id}`">
        <div :class="`p-4 flex flex-col justify-center items-center text-center ${highlight && 'bg-red-500' || ''}`">

            <div class="
                    hover:grow 
                    hover:shadow-lg
                    h-poster-sm
                    w-poster-sm
                    bg-cover 
                    rounded
                    overflow-hidden"
                :style="media.poster ? `background-image: url('${media.poster}')` : `background-color: #f3f3f3;`"
                :title="media.title"
            />

            <div class="flex flex-col">

                <h2 class="text-gray-800 font-bold pt-4">
                    {{ media.title }}
                </h2>

                <p class="text-sm text-gray-600">
                    {{ date }}
                </p>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        media: {
            type: Object,
            required: true,
            default: undefined
        },
        horizontal: {
            type: Boolean,
            required: false,
            default: false
        },
        highlight: {
            type: Boolean,
            required: false,
            default: false
        },
    },
    setup(props) {
        const date = props.media.date
        return {
            date
        };
    }
};
</script>
