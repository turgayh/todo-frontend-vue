import { shallowMount } from "@vue/test-utils";
import TodoList from "@/components/TodoList.vue";

jest.mock("@/repositories/RepositoryFactory");

describe("TodoList.vue", () => {
  it("render todolist successfully", async () => {
    const wrapper = shallowMount(TodoList);
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("render todo input  successfully", async () => {
    const wrapper = shallowMount(TodoList, {});
    expect(wrapper.find("input").exists()).toBe(true);
  });
});
