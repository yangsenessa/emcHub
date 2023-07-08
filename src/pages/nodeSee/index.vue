<template>
  <div>
    <BaseHeader></BaseHeader>
    <div class="nodeSee-con">
      <div>
        <span>33343</span>
        <span>用户数</span>
      </div>
      <div>
        <span>33343</span>
        <span>节点数量</span>
      </div>
      <div>
        <span>33343</span>
        <span>历史并发值</span>
      </div>
      <div>
        <span>33343</span>
        <span>总交易笔数</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NodeSee',
  data () {
    return {
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.nodeSee{
  height: 100Vh;
  background: #04ad11;

}
.nodeSee-con{
  height: 80px;
  width: 80%;
  margin: 10% auto;
  display: flex;
  flex-direction: row;
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    justify-content: space-between;
    span{
      color: #555;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      text-align: center;
      font-weight: 400;
      //line-height: 12px;
    }

  }
  //margin-top: 10%;
}

</style>
