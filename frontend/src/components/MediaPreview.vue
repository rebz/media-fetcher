<template>
    <div :id="`media-${media.id}`">
        
        <div :class="`
            p-4 pt-2 flex items-center 
            ${horizontal && 'flex-row justify-start' || 'flex-col justify-center text-center'}
            ${highlight && 'border-2 border-blue-500 border-solid' || ''}
        `">

            <div :class="`
                    shadow-lg bg-cover 
                    ${horizontal ? 'h-poster-sm w-poster-sm' : 'h-poster-md w-poster-md'}
                    rounded overflow-hidden flex-shrink-0
                `"
                :style="media.poster ? `background-image: url('${media.poster}')` : `background-color: #f3f3f3;`"
                :title="media.title"
            />

            <div class="flex flex-col max-w-full w-full">

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
