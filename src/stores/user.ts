
import { defineStore } from 'pinia';
import { ref,computed } from 'vue';
import type {UserRole}  from './type';


export const useUserStore = defineStore('user', () => {
  const userRole = ref<UserRole | null>(null);

  const setUserRole = (role: UserRole) => {
    userRole.value = role;
  };

  const isLoggedIn = computed(() => !!userRole.value);

    return {
    userRole,
    setUserRole,
    isLoggedIn
  };
});

export default useUserStore;