<template>
  <div class="accordion relative z-10">
    <div v-for="(item, index) in sections" :key="index" class="accordion-item">
      <div class="accordion-header" @click="toggleSection(index)">
        <span>{{ item.title }}</span>
        <img src="@/assets/img/arrow1.svg" alt="arrow1" />
      </div>
      <div v-if="item.expanded" class="accordion-content">
        <ul v-if="item.subItems">
          <li
            v-for="(subItem, subIndex) in item.subItems"
            :key="subIndex"
            class="flex items-center"
          >
            <strong>{{ splitSubItem(subItem).firstPart }}</strong>
            <p>{{ splitSubItem(subItem).secondPart }}</p>
          </li>
        </ul>
        <div class="flex items-center justify-end">
          <div>
            <img src="@/assets/img/arrow2.svg" alt="arrow1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        { title: 'Даатгалын зүйл', expanded: false, subItems: [] },
        {
          title: 'Даатгалын эрсдэл',
          expanded: false,
          subItems: [
            '2.1 Гадаад зорчигчийн амь нас, эрүүл мэнд',
            '2.2 Нислэг хойшлогдох эрсдэл',
            '2.3 Бүртгэгдсэн ачаа тээш алдагдах эрсдэл',
            '2.4 Бүртгэгдсэн ачаа тээш хоцрох',
            '2.5 Гадаад паспорт, жолооны үнэмлэх, иргэний үнэмлэх гээгдэх, алдах'
          ]
        },
        { title: 'Даатгалын үнэлгээ, хураамж', expanded: false, subItems: [] }
      ]
    }
  },
  methods: {
    toggleSection(index) {
      this.sections[index].expanded = !this.sections[index].expanded
    },
    splitSubItem(subItem) {
      const splitIndex = subItem.indexOf(' ') // Find the first space
      if (splitIndex !== -1) {
        return {
          firstPart: subItem.substring(0, splitIndex), // "2.1"
          secondPart: subItem.substring(splitIndex + 1) // "Гадаад зорчигчийн амь нас, эрүүл мэнд"
        }
      }
      return { firstPart: subItem, secondPart: '' }
    }
  }
}
</script>

<style scoped lang="scss">
.accordion {
  width: 100%;
  background: rgba(255, 255, 255, 1);
}

.accordion-item {
  border-bottom: 1px solid rgba(247, 247, 248, 1);
}

.accordion-header {
  padding: 20px 12px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 15.4px;
  text-align: left;
  color: rgba(85, 93, 102, 1);
}

.accordion-content {
  padding: 10px;
  background-color: rgba(255, 255, 255, 1);

  strong {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 21.6px;
    text-align: left;
    color: rgba(85, 93, 102, 1);
    padding-right: 4px;
  }

  p {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 21.6px;
    text-align: left;
    color: rgba(137, 145, 154, 1);
  }
}

.arrow {
  transform: rotate(90deg);
  transition: transform 0.2s;
}
</style>
