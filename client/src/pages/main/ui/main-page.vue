<script setup lang="ts">
  import {Button} from 'primevue';

  import { Title } from '@/shared/ui';
  import { MainLayout } from '@/widgets/ui/layouts'
  import { FooterMain } from '@/shared/ui';

  import { CreateCallButton } from '@/features/call/create'
import MainHeader from '@/widgets/ui/headers/main/main-header.vue';
</script>
<template>
  <MainLayout>
      <MainHeader />
    <section class="container">
      <div class="container__wrap">
        <Title class-name="title" tag="h3">Артем Телемост — видеовстречи по ссылке</Title>
        <CreateCallButton />
      </div>
    </section>
    <template #footer>
      <FooterMain>
        <template #left-side>
          <div>
            <Button>
              Частые вопросы
            </Button>
          </div>
        </template>
        <template #right-side><div>
            <Button>
              Настройки
            </Button>
          </div></template>
      </FooterMain>
    </template>
  </MainLayout>
</template>
<style scoped lang="scss">
  .container {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;

    &__wrap {
      max-width: 700px;
    }
  }

  .title {
    margin-bottom: 20px;
  }

</style>
