<script setup>

</script>

<template>
        <div class="happy-amazing">
            <div class="happy-amazing__box">
                <div class="happy-box__numbers">
                    <div class="happy-numbers__array">
                        <h2 class="happy-array__amount">12</h2>
                        <div class="stat-line"></div>
                        <p class="happy-array__title">AMAZING DEALS</p>
                    </div>
                </div>

                <div class="happy-box__numbers">
                    <div class="happy-numbers__array">
                        <h2 class="happy-array__amount">670</h2>
                        <div class="stat-line"></div>
                        <p class="happy-array__title">SOLD TOURS</p>
                    </div>
                </div>

                <div class="happy-box__numbers">
                    <div class="happy-numbers__array">
                        <h2 class="happy-array__amount">24</h2>
                        <div class="stat-line"></div>
                        <p class="happy-array__title">NEW TOURS</p>
                    </div>
                </div>

                <div class="happy-box__numbers">
                    <div class="happy-numbers__array">
                        <h2 class="happy-array__amount">980</h2>
                        <div class="stat-line"></div>
                        <p class="happy-array__title">HAPPY CUSTOMERS</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>
.happy-amazing {
    background: url("@/assets/images/mainBG.jpg") no-repeat center / cover;
    width: 100%;
    height: 515px;
    display: flex;
    align-items: center;
}

/* umumiy box */
.happy-amazing__box {
    display: flex;
    justify-content: space-around;
    width: 100%;
}

/* har bir column */
.happy-box__numbers {
    text-align: center;
}

/* ichki array */
.happy-numbers__array {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    height: 201px;
}

/* RAQAMLAR (outline text-shadow) */
.happy-array__amount {
    font-family: 'oswald-bold';
    font-weight: 700;
    font-size: 96px;
    line-height: 1;
    letter-spacing: 0.07em;
    color: transparent;

    text-shadow: -2px -2px 0 #fff,
    2px -2px 0 #fff,
    -2px 2px 0 #fff,
    2px 2px 0 #fff;

}

/* chiziq */
.stat-line {
    width: 150px;
    height: 1px;
    background: #fff;
    margin: 12px 0;
}

/* pastdagi text */
.happy-array__title {
    font-family: 'oswald-medium';
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: white;
}

</style>