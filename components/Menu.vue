<template>
    <div class="menu">
        <div class="menu__navigation">
            <NuxtLink class="menu__navigation-item text text--14" to="/wallet" exact no-prefetch>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path  d="M320 336c0 8.844-7.156 16-16 16h-96C199.2 352 192 344.8 192 336V288H0v144C0 457.6 22.41 480 48 480h416c25.59 0 48-22.41 48-48V288h-192V336zM464 96H384V48C384 22.41 361.6 0 336 0h-160C150.4 0 128 22.41 128 48V96H48C22.41 96 0 118.4 0 144V256h512V144C512 118.4 489.6 96 464 96zM336 96h-160V48h160V96z"/></svg>
                <span>My Wallet</span>
            </NuxtLink>
            <NuxtLink class="menu__navigation-item text text--14" to="/interest" exact no-prefetch>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path  d="M374.6 73.39c-12.5-12.5-32.75-12.5-45.25 0l-320 320c-12.5 12.5-12.5 32.75 0 45.25C15.63 444.9 23.81 448 32 448s16.38-3.125 22.62-9.375l320-320C387.1 106.1 387.1 85.89 374.6 73.39zM64 192c35.3 0 64-28.72 64-64S99.3 64.01 64 64.01S0 92.73 0 128S28.7 192 64 192zM320 320c-35.3 0-64 28.72-64 64s28.7 64 64 64s64-28.72 64-64S355.3 320 320 320z"/></svg>
                <span>Interest Account</span>
            </NuxtLink>
            <NuxtLink class="menu__navigation-item text text--14" to="/instant" exact no-prefetch>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM272 192C263.2 192 256 199.2 256 208C256 216.8 263.2 224 272 224H496C504.8 224 512 216.8 512 208C512 199.2 504.8 192 496 192H272zM272 320H496C504.8 320 512 312.8 512 304C512 295.2 504.8 288 496 288H272C263.2 288 256 295.2 256 304C256 312.8 263.2 320 272 320zM164.1 160C164.1 148.9 155.1 139.9 143.1 139.9C132.9 139.9 123.9 148.9 123.9 160V166C118.3 167.2 112.1 168.9 108 171.1C93.06 177.9 80.07 190.5 76.91 208.8C75.14 219 76.08 228.9 80.32 237.8C84.47 246.6 91 252.8 97.63 257.3C109.2 265.2 124.5 269.8 136.2 273.3L138.4 273.9C152.4 278.2 161.8 281.3 167.7 285.6C170.2 287.4 171.1 288.8 171.4 289.7C171.8 290.5 172.4 292.3 171.7 296.3C171.1 299.8 169.2 302.8 163.7 305.1C157.6 307.7 147.7 309 134.9 307C128.9 306 118.2 302.4 108.7 299.2C106.5 298.4 104.3 297.7 102.3 297C91.84 293.5 80.51 299.2 77.02 309.7C73.53 320.2 79.2 331.5 89.68 334.1C90.89 335.4 92.39 335.9 94.11 336.5C101.1 339.2 114.4 343.4 123.9 345.6V352C123.9 363.1 132.9 372.1 143.1 372.1C155.1 372.1 164.1 363.1 164.1 352V346.5C169.4 345.5 174.6 343.1 179.4 341.9C195.2 335.2 207.8 322.2 211.1 303.2C212.9 292.8 212.1 282.8 208.1 273.7C204.2 264.7 197.9 258.1 191.2 253.3C179.1 244.4 162.9 239.6 150.8 235.9L149.1 235.7C135.8 231.4 126.2 228.4 120.1 224.2C117.5 222.4 116.7 221.2 116.5 220.7C116.3 220.3 115.7 219.1 116.3 215.7C116.7 213.7 118.2 210.4 124.5 207.6C130.1 204.7 140.9 203.1 153.1 204.1C157.5 205.7 171 208.3 174.9 209.3C185.5 212.2 196.5 205.8 199.3 195.1C202.2 184.5 195.8 173.5 185.1 170.7C180.7 169.5 170.7 167.5 164.1 166.3L164.1 160z"/></svg>
                <span>Instant Loan</span>
            </NuxtLink>
            <NuxtLink class="menu__navigation-item text text--14" to="/loans" exact no-prefetch>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 144v288C0 457.6 22.41 480 48 480H96V96H48C22.41 96 0 118.4 0 144zM336 0h-160C150.4 0 128 22.41 128 48V480h256V48C384 22.41 361.6 0 336 0zM336 96h-160V48h160V96zM464 96H416v384h48c25.59 0 48-22.41 48-48v-288C512 118.4 489.6 96 464 96z"/></svg>
                <span>My Loans</span>
            </NuxtLink>
            <NuxtLink class="menu__navigation-item text text--14" to="/" exact no-prefetch>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path  d="M32 160h319.9l.0791 72c0 9.547 5.652 18.19 14.41 22c8.754 3.812 18.93 2.078 25.93-4.406l112-104c10.24-9.5 10.24-25.69 0-35.19l-112-104c-6.992-6.484-17.17-8.217-25.93-4.408c-8.758 3.816-14.41 12.46-14.41 22L351.9 96H32C14.31 96 0 110.3 0 127.1S14.31 160 32 160zM480 352H160.1L160 279.1c0-9.547-5.652-18.19-14.41-22C136.9 254.2 126.7 255.9 119.7 262.4l-112 104c-10.24 9.5-10.24 25.69 0 35.19l112 104c6.992 6.484 17.17 8.219 25.93 4.406C154.4 506.2 160 497.5 160 488L160.1 416H480c17.69 0 32-14.31 32-32S497.7 352 480 352z"/></svg>
                <span>Crypto Exchange</span>
            </NuxtLink>
            <NuxtLink class="menu__navigation-item text text--14" to="/refer" exact no-prefetch>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3c-95.73 0-173.3 77.6-173.3 173.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM479.1 320h-73.85C451.2 357.7 480 414.1 480 477.3C480 490.1 476.2 501.9 470 512h138C625.7 512 640 497.6 640 479.1C640 391.6 568.4 320 479.1 320zM432 256C493.9 256 544 205.9 544 144S493.9 32 432 32c-25.11 0-48.04 8.555-66.72 22.51C376.8 76.63 384 101.4 384 128c0 35.52-11.93 68.14-31.59 94.71C372.7 243.2 400.8 256 432 256z"/></svg>
                <span>Refer a Friend</span>
            </NuxtLink>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.menu {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 64px);
    width: 224px;
    background-color: $total-white;
    padding: 36px 12px 20px 12px;
    box-shadow: 0 2px 4px rgb(220 220 220 / 50%);
}

.menu__navigation-item {
    display: flex;
    align-items: center;
    text-decoration:none;
    color: $text-black;
    font-weight: 700;
    width: 100%;
    word-wrap: break-word;
    position: relative;
    @include svg-color($gray);

    >svg {
        width: 16px;
        height: 16px;
    }

    :last-child {
        margin-left: 16px;
    }

     &:not(:last-child) {
      margin-bottom: 40px;
    }

    &.nuxt-link-exact-active, &:hover {
      color: $brand;
      transition: color .3s linear;
      @include svg-color($brand);

    }

    &.nuxt-link-exact-active::before {
    content: '';
    position: absolute;
    display: block;
    height: 41px;
    width: 4px;
    background-color: $brand;

    top: -10px;
    left: -38px;
    z-index: 1;
    }
}
</style>