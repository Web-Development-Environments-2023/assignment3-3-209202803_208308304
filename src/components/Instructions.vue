<template>
  <div class="container">
    <div>
      <b-form-group id="input-group-number" label-cols-sm="1" :label="getNumber" label-for="number">
        <b-form-input type="text" placeholder="step" v-model="$v.form.step.$model" :state="validateState('step')"
          @change="updateStep"></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.step.required">
          Instruction is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.step.alphaNumAndSpaceValidator">
          Instruction can include only alphanumeric letters and special characters .,-!?()
        </b-form-invalid-feedback>
      </b-form-group>
    </div>
  </div>
</template>

<script>
import {
  required,
  helpers,
} from "vuelidate/lib/validators";
const alphaNumAndSpaceValidator = helpers.regex('alphaNumSpace', /^[\w\-\s.,!?()]+$/);

export default {
  name: "Instructions",
  props: {
    instruction: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      form: {
        number: "",
        step: "",
      },
      errors: [],
      validated: false
    };
  },
  validations: {
    form: {
      number: {
        required,
      },
      step: {
        required,
        alphaNumAndSpaceValidator
      },
    }
  },
  computed: {
    getNumber() {
      return this.instruction.number + ".";
    }
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    updateNumber() {
      this.instruction.number = this.$v.form.number.$model;
    },
    updateStep() {
      this.instruction.step = this.$v.form.step.$model;
    },
  }
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 500px;
}
</style>