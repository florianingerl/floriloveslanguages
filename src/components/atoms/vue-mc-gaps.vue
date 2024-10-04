<template>
<div>
<!--
<ol style="list-style-type: none">
<li v-for="innergaps in gaps">
<span v-for="gap in innergaps" >
  {{ gap.text }} 
  <select :disabled="validated" v-if="gap.options" :class="{ notcorrect: validated && gap.guess != gap.solution, correct: validated && gap.guess === gap.solution }" v-model="gap.guess">
    <option>First</option>
    <option>Second</option>
    <option v-for="op in gap.options">{{ op }}</option>
  </select> 

  <input :disabled="validated" v-if="gap.gap" :style="{ width: ( gap.gap.length + 2 ) + 'ch' }" :class="{ notcorrect: validated && gap.guess != gap.solution, correct: validated && gap.guess === gap.solution }" type="text" v-model="gap.guess"> 
</span>
</li>
</ol> -->

<ol style="list-style-type: none">
<li v-for="innergaps in gaps">
<span v-for="gap in innergaps" >
  {{ gap.text }} 
  <!--
  <select :disabled="validated" v-if="gap.options" :class="{ notcorrect: validated && gap.guess != gap.solution, correct: validated && gap.guess === gap.solution }" v-model="gap.guess">
    <option v-for="op in gap.options">{{ op }}</option>
  </select> -->

  <Select :v-bind="gap.guess" :disabled="validated" v-if="gap.options" :class="{ notcorrect: validated && gap.guess != gap.solution, correct: validated && gap.guess === gap.solution }">
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Select something" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectGroup>
              <SelectItem v-for="op in gap.options" :value="op">
                {{ op }}}
              </SelectItem>
              
            </SelectGroup>
          </SelectContent>
        </Select>
  <Input v-if="!validated && gap.gap" :style="{ width: ( gap.gap.length + 2 ) + 'ch' }" type="text" v-model="gap.guess"> </Input>
  <span v-if="validated && gap.gap"  :class="{ notcorrect: validated && gap.guess != gap.solution, correct: validated && gap.guess === gap.solution }">{{ gap.guess }} </span>
  <span v-if="validated && gap.gap && gap.solution != gap.guess" class="correct">{{ gap.solution }} </span>
  <span v-if="validated && gap.options && gap.guess != gap.solution" class="correct"> {{ gap.solution }} </span>

  <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
</span>
</li>
</ol>


<p v-if="lg==='fr'">
<Button @click="buttonValidateClicked">Valider ma solution</Button>
<Button @click="showSolutionClicked">Montre-moi la solution</Button>
</p>
<p v-if="lg==='en'">
<Button @click="buttonValidateClicked">Validate</Button>
<Button @click="showSolutionClicked">Show me the solution</Button>
</p>
<p v-if="lg==='de'">
<Button @click="buttonValidateClicked">Meine Lösung prüfen</Button>
<Button @click="showSolutionClicked">Lösung zeigen</Button>
</p>


</div>

    
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import type { Languages } from "../../types/Languages.ts";
import type { PropType } from "vue";
import type { Gap } from "../../types/Gap.ts";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';


export default defineComponent({
  name: "VueMCGaps",
  components: {
    Button, Input
  },
  props: {
    gaptext: {
      required: false,
      type: String
    },
    gaptexts: {
      required: false,
      type: Array as PropType<string[]>
    },
    lg : {
      required: true,
      type: String as PropType<Languages>
    },
    same: {
      required: false,
      type: Boolean
    },
    numbering: {
      required: false,
      type: Boolean
    }
  },

  setup(props){

    const gaps = ref<Array<Array<Gap>>>([]);
    const validated = ref<boolean>(false);

    return { validated, gaps };

  },

  mounted(){
     console.log("The setup function is executed!");
     
    
     if(this.gaptexts ){ //gaptext is an array of gaptexts
      console.log(this.gaptexts);
      this.parseGapTexts(this.gaptexts);
     }
     else if(this.gaptext){
      this.parseGapText(this.gaptext);
     }

     console.log( "The value of this.same is " + this.same );
     let alloptions : string[] = [];
     if(this.same){
       
        console.log( "The value of this.gaps is " + this.gaps );
       this.gaps.forEach( (innergaps: Array<Gap>) => {
           innergaps.forEach( (gap: Gap) => {
           if(gap.options ) { 
           gap.options.forEach( (option:string) => {
              if( alloptions.indexOf(option) == -1 && option != '' ){
                alloptions.push(option);
              }
           });
           }
       });
  

       });
     }

       this.gaps.forEach( (innergaps: Array<Gap>) => {
        innergaps.forEach(
        (gap:Gap) => {
          gap.solution = (gap.options ? gap.options[0] : gap.gap) as string;
          if( gap.options  ){
            if(!this.same){
            gap.options = this.shuffle(gap.options);
            }
            else {
              gap.options = [...alloptions];
            }
          }
          

       });

     });
     },
  
  
  methods: {
    
     buttonValidateClicked(){
        this.validated = true;
        console.log("The button validated was clicked!");
     },
     showSolutionClicked(){
        this.validated = true;
        this.gaps.forEach( (innergaps: Array<Gap>) => {
          innergaps.forEach( (gap:Gap) => {
             gap.guess = gap.solution;
             } );
          
        } );
     },

     shuffle<T>(array: Array<T>){
      if(this.same){
        return array;
      }
      let newarray = [...array];
      newarray.sort( (a: T,b:T) => 0.5 - Math.random() );
      return newarray;
      },
     parseGapTexts(gaptexts: string[] ){
      console.log("parseGapTexts called!");
        gaptexts.forEach( (gaptext:string) => {
           console.log(gaptext + " is now parsed!");
           this.parseGapText(gaptext);
        } );
     },
     parseGapText(data: string ){
      if(!data.endsWith("}")){
        data += "{}";
      }
      let gaps : Gap[] = [];
      let i = 0;
      while (true){
        let gap : Gap = {text: "", solution: "", guess: ""};
        let j = data.indexOf("{",i);
        if(j == -1){
            break;
        }
        gap.text = data.substring(i,j);
        i = data.indexOf("}",j);
        let temp: string[] = data.substring(j+1,i).split("|");
        if( temp.length == 1){ //This is just a normal gap, not a multiple options gap, | didn't appear
          gap.gap = temp[0];
        }else {
          gap.options = temp;
        }

        i++;
        gap.guess = "";
        gaps.push(gap);
      }
      console.log(gaps);
      this.gaps.push(gaps);
     }
  }
});
</script>

<style scoped>

.correct {
    color: green;
    border: 1px solid green
}

.notcorrect {
    color: red;
    border: 1px solid red;
    text-decoration: line-through;
}



</style>