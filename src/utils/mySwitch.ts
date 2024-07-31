import { ref, computed } from "vue";
import wuwu from "../assets/img/wuwu.jpeg";
import waoku from "../assets/img/waoku.jpg";

const preRef = ref<HTMLElement | null>(null);
const flag = ref(false);
const imgList = ref([wuwu, waoku]);



//切换表单视图
const preBoxStyle = computed(() => ({
  background: flag.value ? "#c9e0ed" : "#edd4dc",
  transform: flag.value ? "translateX(100%)" : "translateX(0%)",
}));

const mySwitch = () => {
  flag.value = !flag.value;
};

export { preRef, preBoxStyle, mySwitch, imgList ,flag};