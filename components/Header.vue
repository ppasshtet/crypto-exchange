<template>
    <header class="header">
        <div class="header__container">
            <div class="container__left">
                <div class="container__logo"> 
                   <img src="@/static/header/logo-icon.svg" alt="">
                </div>
                <span class="text-bold">
                    CoinLoan
                </span>
            </div>
            <div class="container__account">
                <div class="account-logo">
                    <img src="@/static/header/user-solid.svg" alt="">
                </div>
                <div class="account-text text text--16">
                    My Account
                </div>
                <div class="account__list-btn">
                    <img src="@/static/header/angle.svg" alt="">
                </div>
            </div>
        </div>
    </header>
</template>

<script>


</script>


<style lang="scss" scoped>
.header {
    background-color: $brand;
    height: 64px;
    width: 100%;
    box-shadow: 0 2px 4px rgb(166 166 166 / 50%);
}

.header__container {
    height: 100%;
    width: 100%;
    padding: 12px 33px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.container__left {
    display: flex;
    align-items: center;
}

.container__logo { 
    border: 1px solid $white;
    border-radius: 4px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    >img {
        width: 22px;
        height: 22px;
    }
}

.container__account {
    display: flex;
    align-items: center;
    justify-content: center;
}

.account-logo {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: $total-white;

    >img {
        width: 16px;
        height: 16px;
    }
}

.account-text {
    margin-left: 12px;
}

.account__list-btn {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
    >img {
        width: 14px;
        height: 14px;
    }
}
</style>