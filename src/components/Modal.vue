<template>
    <div class="mode" @click.self="toggleModal">
    <div class="card">
      <Form @submit="createPost" :validation-schema="schema">
        <div class="form-group">
          <label for="name" style="padding-top: 13px">title</label>
          <Field name="name" type="text" class="form-content" />
          <div class="form-border"></div>
          <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="description" style="padding-top: 13px">description</label>
          <Field name="description" type="description" class="form-content" />
          <div class="form-border"></div>
          <ErrorMessage name="description" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="catergory" style="padding-top: 13px">catergory</label>
          <Field name="catergory" type="catergory" class="form-content" />
          <div class="form-border"></div>
          <ErrorMessage name="price" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="img" style="padding-top: 13px">img</label>
          <Field name="img" type="img" class="form-content" />
          <div class="form-border"></div>
          <ErrorMessage name="img" class="error-feedback" />
        </div>
        
        <div class="form-group">
          <button
            id="submit-btn"
            class="btn btn-primary btn-block"
            :disabled="loading"
          >
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Add Post</span>
          </button>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
// import { Form, Field, ErrorMessage } from "vee-validate";
// import mongoose.model('Posts', PostSchema);

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    catergory: {
        type:String,
        required:true,
    },
    });
    return {
      loading: false,
      message: "",
      schema,
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.$emit("clicked");
    },
    createPost(post) {
      this.loading = true;
      this.$store.dispatch("post/create", post).then(
        () => {
          location.reload();
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>

<style scoped>
.mode {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
}

.bruh .card {
  height: fit-content;
  padding: 2rem;
  margin: 0 auto;
}
</style>