import { shallowMount } from "@vue/test-utils";
import TodoList from "@/components/TodoList.vue";

describe("TodoList.vue", () => {
  it("render todolist successfully", () => {
    const wrapper = shallowMount(TodoList);
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("render todo input  successfully", () => {
    const wrapper = shallowMount(TodoList, {});
    expect(wrapper.find("input").exists()).toBe(true);
  });
});
