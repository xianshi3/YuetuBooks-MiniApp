<template>
  <div>
    <!-- 用户捐赠管理部分 -->
    <section class="section">
      <h2>用户捐赠管理</h2>
      <ul>
        <li v-for="(donation, index) in donations" :key="index">
          <div>
            <strong>{{ donation.bookName }}</strong>
            <p>捐赠数量：{{ donation.donationQuantity }}</p>
          </div>
          <div>
            <button @click="editDonation(index)">编辑</button>
            <button @click="deleteDonation(index)">删除</button>
          </div>
        </li>
      </ul>
    </section>

    <!-- 管理员管理部分 -->
    <section class="section">
      <h2>管理员管理</h2>
      <ul>
        <li v-for="(admin, index) in admins" :key="index">
          <div>
            <strong>{{ admin.name }}</strong>
            <p>邮箱：{{ admin.email }}</p>
          </div>
          <div>
            <button @click="editAdmin(index)">编辑</button>
            <button @click="deleteAdmin(index)">删除</button>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      donations: [
        { id: 1, bookName: 'C语言程序设计', donationQuantity: 5 },
        { id: 2, bookName: 'Python基础', donationQuantity: 10 },
      ],
      admins: [
        { id: 1, name: '管理员1', email: 'admin1@example.com' },
        { id: 2, name: '管理员2', email: 'admin2@example.com' },
      ],
    };
  },
  methods: {
    editDonation(index) {
      // 实现编辑捐赠的逻辑
      console.log('编辑捐赠：', this.donations[index]);
    },
    deleteDonation(index) {
      // 实现删除捐赠的逻辑
      console.log('删除捐赠：', this.donations[index]);
    },
    editAdmin(index) {
      // 实现编辑管理员的逻辑
      console.log('编辑管理员：', this.admins[index]);
    },
    deleteAdmin(index) {
      // 实现删除管理员的逻辑
      console.log('删除管理员：', this.admins[index]);
    },
  },
};
</script>

<style scoped>
.section {
  margin-bottom: 20px;
}
</style>


