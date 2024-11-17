<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// Define the props to make the form customizable
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  fields: {
    type: Array as () => string[], // Array of strings for input names (e.g., ['name', 'password'])
    required: true,
  },
  buttonText: {
    type: String,
    default: 'Submit',
  },
  onSubmit: {
    type: Function,
    required: true,
  },
})

// Create a reactive object to hold the form data
const formData = ref<Record<string, string>>({})

// Initialize the formData object with empty strings for each field
props.fields.forEach((field: string) => {
  formData.value[field] = ''
})
const handleSubmit = (formData: ref<Record<string, string>>) => {
  console.log("clickes")
  console.log(formData)
  props.onSubmit(formData)
}
</script>

<template>
  <Card class="w-[350px]">
    <CardHeader>
      <CardTitle>{{ props.title }}</CardTitle>
      <CardDescription>{{ props.description }}</CardDescription>
    </CardHeader>
    <CardContent>
      <form @submit.prevent="handleSubmit">
        <div class="grid items-center w-full gap-4">
          <!-- Loop over the fields prop to create dynamic input fields -->
          <div v-for="(field, index) in props.fields" :key="index" class="flex flex-col space-y-1.5">
            <Label :for="field">{{ field.charAt(0).toUpperCase() + field.slice(1) }}</Label>
            <Input
              :id="field"
              v-model="formData[field]"
              :placeholder="'Enter ' + field"
              type="text"
            />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter class="flex justify-between px-6 pb-6">
      <!-- Submit Button -->
      <Button type="submit" @click='handleSubmit(formData)'>
        {{ props.buttonText }}
      </Button>
    </CardFooter>
  </Card>
</template>

<style scoped>
/* Add any specific styling for the component here if necessary */
</style>
