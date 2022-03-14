<template>
    <div class="header-pages">
        <div class="header-pages__icon">
            <slot name="icon"></slot>
        </div>
        <div class="header-pages__text text text-24 ">
            <span>
                <slot name="text"></slot>
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header-pages {
    display: flex;
    align-items: center;
}

.header-pages__icon {
    svg {
        width: 24px;
        height: 24px;
    }
}

.header-pages__text {
    color: $text-black;
    font-size: 24px;
    margin-left: 16px;
}
</style>