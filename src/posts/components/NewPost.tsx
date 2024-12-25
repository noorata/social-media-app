import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addPost } from "../posts-api";
import { useTranslation } from "react-i18next";

interface NewPostProps {
  onPostCreated: () => void;
  onClose: () => void;
}

const NewPost: React.FC<NewPostProps> = ({ onPostCreated, onClose }) => {
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    title: Yup.string()
      .required(t("newPost.validation.titleRequired"))
      .min(5, t("newPost.validation.titleMin")),
    description: Yup.string()
      .required(t("newPost.validation.descRequired"))
      .min(5, t("newPost.validation.descMin")),
    author: Yup.string().required(t("newPost.validation.authorRequired")),
  });

  const handleSubmit = async (values: {
    title: string;
    description: string;
    author: string;
  }) => {
    try {
      const newPost = {
        id: Date.now(),
        ...values,
        dateCreated: new Date().toISOString(),
        status: "draft" as "draft",
        likes: 0,
        comments: 0,
        tags: [] as string[],
        authorImg: "https://randomuser.me/api/portraits/men/1.jpg",
        img: "",
        content: "",
      };

      await addPost(newPost);
      toast.success(t("newPost.msg.postCreated"));
      onPostCreated();
      onClose();
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error(t("newPost.msg.failedCreatePost"));
    }
  };

  return (
    <div className="container mt-3">
      <h2 className="mb-4">{t("newPost.createNewPost")}</h2>

      <Formik
        initialValues={{ title: "", description: "", author: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="shadow p-4 bg-light rounded">
            <fieldset className="mb-3">
              <legend>{t("newPost.postDetails")}</legend>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  {t("newPost.title")}
                </label>
                <Field
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder={t("newPost.placeholder.title")}
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  {t("newPost.description")}
                </label>
                <Field
                  as="textarea"
                  name="description"
                  className="form-control"
                  placeholder={t("newPost.placeholder.description")}
                  rows={3}
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="author" className="form-label">
                  {t("newPost.author")}
                </label>
                <Field
                  type="text"
                  name="author"
                  className="form-control"
                  placeholder={t("newPost.placeholder.author")}
                />
                <ErrorMessage
                  name="author"
                  component="div"
                  className="text-danger"
                />
              </div>
            </fieldset>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("newPost.btn.saving") : t("newPost.btn.save")}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewPost;
