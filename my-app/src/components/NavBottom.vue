<template>
    <div class="footer">
        <footer class="fixBottomBox">
            <ul>
                <router-link tag="li" to="/home" class="tabItem">
                <a href="javascript:;" class="tab-item-link">
                    <!-- <img src="../assets/images/a-home.png" class="tab-item-icon"> -->
                    <i class="iconfont icon-shouye"></i>
                </a>
                </router-link>
                <router-link tag="li" to="/catgory" class="tabItem">
                <a href="javascript:;" class="tab-item-link">
                    <!-- <img src="../assets/images/n-catergry.png" class="tab-item-icon"> -->
                    <i class="iconfont icon-wodedingdan"></i>
                </a>
                </router-link>
                <router-link tag="li" to="/find" class="tabItem">
                <a href="javascript:;" class="tab-item-link">
                    <!-- <img src="../assets/images/n-find.png" class="tab-item-icon"> -->
                    <i class="iconfont icon-sousuo"></i>
                </a>
                </router-link>
                <router-link tag="li" to="/cart" class="tabItem">
                <a href="javascript:;" class="tab-item-link">
                    <!-- <img src="../assets/images/n-cart.png" class="tab-item-icon"> -->
                    <i class="iconfont icon-gouwuche"></i>
                </a>
                </router-link>
                <router-link tag="li" to="/mine" class="tabItem">
                <a href="javascript:;" class="tab-item-link">
                    <i class="iconfont icon-wodejuhuasuan"></i>
                </a>
                </router-link>
            </ul>
        </footer>
    </div>
</template>

<style scoped>
.active i,
.active label {
    color: #f60;
}
.iconfont {
    background: none;
    padding-left: 10px;
    padding-top: 6px;
    font-size: 30px;
    margin: 0px;
    height: 30px;
    width: 70px;
}
.text-nav {
    font-size: 5px;
    padding-bottom: 0px;
    margin-bottom: 0px;
}
</style>

