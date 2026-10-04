<script setup>

</script>

<template>
    <div class="happy-travelers container">
        <div class="happy-travelers__left">
            <img src="../../assets/images/main-travelers-left.svg" alt="svg" class="happy-travelers__left-img">
        </div>
        <div class="happy-travelers__right">
            <div class="happy-right__box">
                <div class="happy-box__top">
                    <h2 class="happy-top__small">Reviews</h2>
                    <h2 class="happy-top__big">Happy Travelers</h2>
                    <div class="happy-top__hr"></div>
                </div>
            </div>
            <div class="happy-right__bottom container">
                <div class="happy-bottom__stars">
                    <h2 class="happy-stars__title">The planning process was excellent</h2>
                    <img src="@/assets/images/stars.svg" alt="" class="happy-stars__img">
                </div>
                <div class="happy-bottom__reed">
                    <h2 class="happy-reed__title">Howard Reed</h2>
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="#6B6B6B" />
                    </svg>
                    <p class="happy-reed__data">15/05/2023</p>
                </div>
                <p class="happy-bottom__text">It was a life changing experience and we couldn’t be
                    happier to have done it it, learned so much, seen so much,
                    and escaped from work for a couple of weeks!”</p>
                <div class="happy-bottom__icons">
                    <img src="@/assets/images/Right.svg" alt="svg" class="happy-icons__left">
                    <img src="@/assets/images/Left.svg" alt="svg" class="happy-icons__left">
                </div>
            </div>


        </div>
    </div>
</template>

<style scoped>

.happy-travelers{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 30px;
    padding-top: 50px;
}

.happy-top__small {
    font-weight: 400;
    font-size: 24px;
    line-height: 120%;
    text-align: center;
    color: #3fd0d4;
}

.happy-top__big {
    font-weight: 700;
    font-size: 42px;
    line-height: 140%;
    text-align: center;
    color: #363636;
}

.happy-travelers__left {
    z-index: -1;
}

.happy-travelers__left-img {
    display: flex;
}

.happy-travelers__right{
    z-index: 999;
}

.happy-top__hr {
    max-width: 150px;
    width: 100%;
    height: 2px;
    background: black;
    margin: 12px auto;

}

.happy-bottom__stars{
    display: flex;
    gap: 60px;
    padding-top: 10px;
}

.happy-right__bottom{
    border-radius: 8px;
    width: 540px;
    height: 281px;
    box-shadow: 0 4px 65px 0 rgba(0, 0, 0, 0.08);
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.happy-bottom__reed{
    display: flex;
    align-items: center;
    gap: 10px;
}

.happy-stars__title{
    font-weight: 700;
    font-size: 22px;
    line-height: 150%;
    color: #464646;

}

.happy-reed__title{
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #6b6b6b;
}

.happy-reed__data{
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    color: #959595;
}

.happy-bottom__text{
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #959595;
}

.happy-bottom__icons {
    display: flex;
    gap: 10px;
}
</style>