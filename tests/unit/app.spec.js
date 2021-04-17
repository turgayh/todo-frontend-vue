import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("render App successfully", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.find("div").exists()).toBe(true);
  });
});
