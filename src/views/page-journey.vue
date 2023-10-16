<script>
/**
 * Page-journey component
 */
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default {
    data() {
        return {}
    },
    components: {
        Navbar,
        Footer
    }
}
</script>

<template>
    <div>
        <Navbar :nav-light="true" />
        <div class="container mt-100">
            <h2>Journey</h2>
            <div class="content">
                <p>欢迎开启你的城邦之旅！</p>

                <p>如果想要加入城邦，请完成我们在Deschool上的Onboarding流程，获取SeeDAO身份SBT。这是你进入城邦的第一步。</p>

                <p>进入城邦后，由于你还没有在城邦中留下痕迹，积分值为0，因此无法在城邦拥有任何提案权、治理权和身份福利。于是，你踏上了一条有趣的城邦之旅，开始了你收集积分的游戏进程。</p>

                <p>在这个世界中，成员的身份根据其贡献积分被划分为L1-L5五个阶段。其中，L3（10万积分）是最重要的门槛，它标志你将有权免费铸造SeeDAO核心成员的身份NFT——Seed。持有Seed是参与SeeDAO最高治理会议——节点共识大会的必要条件。在城邦内，Seed也对应着多种身份福利。
                </p>

                <p>当然，城邦的三层提案体系，也赋予了不同阶段的成员们（例如L1、L2级贡献者）相应的治理权。</p>

                <p>对于一个新人来说，在SeeDAO的旅程，就是在城邦中留下痕迹，将种种因缘积累成Seed的过程。当你成为Seed后，游戏会突然发生变化，因为你开始触碰改写游戏规则和影响世界进程的权力。</p>

                <p>这无疑是一趟充满惊喜的冒险之旅，你将在这趟旅途中结交真实的朋友，并投入大量的时间与情感（有时候甚至还有金钱）。——让很多人都不理解的是，为什么SeeDAO成员们愿意花几个小时在一个开会或者吵架，但这正是城邦令人着迷之处。
                </p>

            </div>
            <div class="links">
                <div class="link-row mt-4">
                    <a href="" target="_blank" rel="noopener noreferrer"
                        class="col-md-4 col-12 box">
                        SeeDAO Onboarding流程
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer"
                        class="col-md-4 col-md-offset-4 col-12  box">
                        SeeDAO 身份体系
                    </a>
                </div>
                <div class="link-row mt-4">
                    <a href="" target="_blank" rel="noopener noreferrer"
                        class="col-md-4 col-12 box">
                        悬赏酒馆
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer"
                        class="col-md-4 col-md-offset-4 col-12 box">
                        三层提案
                    </a>
                </div>
                <div class="link-row mt-4">
                    <a href="" target="_blank" rel="noopener noreferrer"
                        class="col-md-4 col-12 box">
                        Seed NFT
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer"
                        class="col-md-4 col-md-offset-4 col-12 box">
                        节点共识大会
                    </a>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<style scoped>
h2 {
    margin-bottom: 30px;
}

.links {
    border-top: 1px solid #ddd;
    padding-top: 40px;
    margin-top: 60px;
    padding-bottom: 60px;
}

.box {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 16px;
    cursor: pointer;
}

.link-row {
    display: flex;
    gap: 100px;
}

@media (max-width: 767px) {
    .link-row {
        flex-direction: column;
        gap: 1.5rem;
    }
}
</style>
