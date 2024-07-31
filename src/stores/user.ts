import { defineStore } from 'pinia';
import { ref } from 'vue';

type UserRole = 'personal' | 'business';

export const useUserStore = defineStore('user', () => {
  const userRole = ref<UserRole | null>(null);

  const setUserRole = (role: UserRole) => {
    userRole.value = role;
  };

    return {
    userRole,
    setUserRole,
  };
});