<script setup lang="ts">
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import draggable from 'vuedraggable'

const statusOptions = reactive([
  { label: 'Draft', value: 'draft' },
  { label: 'Publish', value: 'publish' },
])

const levelOptions = reactive([
  { label: 'Basic', value: '1' },
  { label: 'Intermediate', value: '2' },
  { label: 'Advanced', value: '3' },
])

const categoryOptions = reactive([
  { label: 'Koltitrace MIS', value: 'koltitrace_mis' },
  { label: 'KoltiTrade', value: 'koltitrade' },
  { label: 'KoltiSkills', value: 'koltiskills' },
  { label: 'Koltitrace Farm Retail', value: 'koltitrace_farmretail' },
  { label: 'Koltitrace Farm Cloud', value: 'koltitrace_farmcloud' },
])

const courseSection = ref([
  {
    name: 'Getting Started with Angular',
    lesson: [
      { name: 'Introduction', duration: '8m' },
      { name: 'Introduction to TypeScript', duration: '50m' },
      { name: 'Comparing Angular to AngularJS', duration: '12m' },
    ],
  },
  {
    name: 'Creating and Communicating Between Angular Components',
    lesson: [
      { name: 'Angular Components', duration: '8m' },
      { name: 'Template Syntax', duration: '5m' },
    ],
  },
]);

const openSection = ref(false);
const openLesson = ref(false);
const showButtonChoose = ref(true);
const showLessonForm = ref(false);
const showLessonList = ref(false);
</script>

<template>
  <h1 class="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl mb-5">
    Add New Course
  </h1>

  <div class="flex flex-row gap-4">
    <!-- Sidebar  -->
    <div class="w-1/4">
      <KtvCard>
        <template #header>
          <CardTitle>Cover</CardTitle>
        </template>

        <Input id="picture" type="file" />
      </KtvCard>

      <KtvCard class="mt-3">
        <template #header>
          <CardTitle>Status</CardTitle>
        </template>

        <KtvSelect placeholder="Select Status" :options="statusOptions" />
      </KtvCard>
    </div>

    <div class="grow">
      <Tabs default-value="general">
        <TabsList class="grid w-full grid-cols-2">
          <TabsTrigger value="general">
            General
          </TabsTrigger>
          <TabsTrigger value="course_lesson">
            Course Lesson
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <KtvCard>
            <template #header>
              <CardTitle>General</CardTitle>
            </template>

            <!-- Course Name -->
            <div class="mb-5">
              <Label>Course Name</Label>
              <Input type="text" name="name" placeholder="Course 1" />
            </div>

            <!-- Course Description -->
            <div class="mb-5">
              <Label>Course Description</Label>
              <Textarea type="text" name="description" placeholder="..." />
            </div>

            <div class="flex gap-4">
              <div class="basis-1/2">
                <Label>Category</Label>
                <KtvSelect placeholder="Select Category" :options="categoryOptions" />
              </div>

              <div class="grow">
                <Label>Level</Label>
                <KtvSelect placeholder="Select Level" :options="levelOptions" />
              </div>
            </div>

            <div class="mt-5">
              <Label>Tags</Label>
              <Input type="text" />
            </div>
          </KtvCard>
          <Button class="mt-3 float-right px-10">Save</Button>
        </TabsContent>

        <TabsContent value="course_lesson">
          <Button class="mt-3 mb-2" @click="openSection = true">Add Course Section</Button>
          
          <KtvCard class="mb-5" v-for="(section, sectionIndex) in courseSection" :key="sectionIndex">
            <template #header>
              <CardTitle class="flex justify-between">
                {{section.name}}

                <div class="flex gap-3">
                  <Button class="bg-amber-500" @click="openSection = true">Edit</Button>
                  <Button class="bg-rose-600">Remove</Button>
                </div>
              </CardTitle>
            </template>

            <Table>
              <TableBody>
                <TableRow v-for="(lesson, lessonIndex) in section.lesson" :key="lessonIndex">
                  <TableCell class="font-medium">
                    {{ lesson.name }}
                  </TableCell>
                  <TableCell class="text-right">
                    {{ lesson.duration }}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Button 
              variant="outline" 
              class="3"
              @click="openLesson = true"
            >
              Add new lesson
            </Button>

          </KtvCard>

          <Button class="mt-3 float-right px-10">Save</Button>

        </TabsContent>
      </Tabs>
    </div>

    <!-- Modal Course Section -->
    <Dialog :open="openSection" @update:open="openSection = false">
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Form Course Section
          </DialogTitle>
        </DialogHeader>

        <div class="mb-3">
          <Label>
            Course Section Name
          </Label>
          <Input id="lesson_name" name="name" class="col-span-3" />
        </div>

        <DialogFooter>
          <Button type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    <!-- Modal Course Lesson -->
    <Dialog :open="openLesson" @update:open="openLesson = false; showButtonChoose = true; showLessonForm = false; showLessonList = false;">
      <DialogContent class="sm:max-w-[425px]">
  
        <DialogHeader class="mb-5">
          <DialogTitle>
            Create New Course Lesson
          </DialogTitle>
        </DialogHeader>

        <!-- Button Choose -->
        <div v-if="showButtonChoose">
          <RadioGroup default-value="card" class="grid grid-cols-2 gap-4">
            <div>
              <RadioGroupItem id="card" value="card" class="peer sr-only" />
              <Label
                for="card"
                class="w-40 h-32 flex align-center text-center items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                @click="showButtonChoose = false; showLessonForm = true;"
              >
                Create new one
              </Label>
            </div>
            <div>
              <RadioGroupItem
                id="paypal"
                value="paypal"
                class="peer sr-only"
              />
              <Label
                for="paypal"
                class="w-40 h-32 flex align-center text-center items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                @click="showButtonChoose = false; showLessonList = true;"
              >
                Add from existing Lesson
              </Label>
            </div>
          </RadioGroup>
        </div>

        <!-- Create New Lesson -->
        <div v-if="showLessonForm" class="flex flex-col">
          <div class="mb-3">
            <Label>
              Course Lesson Name
            </Label>
            <Input id="lesson_name" name="name" class="col-span-3" />
          </div>
          
          <div class="mb-3">
            <Label>
              Course Lesson Name
            </Label>
            <Textarea type="text" name="description" placeholder="..." />
          </div>

          <div class="mb-3">
            <Label>
              Upload Lesson
            </Label>
            <Input id="picture" type="file" />
          </div>
        </div>

        <!-- Pick Existing Lesson -->
        <div v-if="showLessonList" class="flex flex-col">
          <div class="mb-3">
            <Label>
              Search your existing course
            </Label>
            <Input id="lesson_name" name="name" class="col-span-3" />
          </div>

          <Table>
            <TableBody>
              <TableRow v-for="(lesson, lessonIndex) in courseSection[0].lesson" :key="lessonIndex">
                <TableCell class="font-medium">
                  {{ lesson.name }}
                </TableCell>
                <TableCell class="text-right">
                  {{ lesson.duration }}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

      </DialogContent>
    </Dialog>
  </div>
</template>