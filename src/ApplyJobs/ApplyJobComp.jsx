import React, { useState, useCallback } from "react";
import {
  Button,
  FileInput,
  Divider,
  NumberInput,
  TextInput,
  Textarea,
  LoadingOverlay,
} from "@mantine/core";
import { IconPaperclip } from "@tabler/icons-react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "react-toastify/dist/ReactToastify.css";

const ApplyJobComp = () => {
  const [preview, setPreview] = useState(true);
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const handlePreview = useCallback(() => {
    setPreview((prev) => !prev);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    toast.info(preview ? "Preview Mode Enabled" : "Edit Mode Enabled", {
      position: "top-center",
      autoClose: 2000,
       // ✅ brightSun.400
    });
  }, [preview]);

  const handleSubmit = () => {
    setSubmit(true);
    toast.success("Your job application has been successfully submitted!", {
      position: "top-center",
      autoClose: 2000,
       // ✅ brightSun.400
    });

    setTimeout(() => {
      setSubmit(false);
      navigate("/find-job");
    }, 2000);
  };

  return (
    <div className="w-2/3 mx-auto p-5 rounded-xl relative">
      {/* ✅ Toast Container with `brightSun.400` color */}
      <ToastContainer />

      {/* ✅ Loading Overlay with `brightSun.400` */}
      <LoadingOverlay
        className="!fixed"
        visible={submit}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "#FDCB58", type: "bars" }} // ✅ brightSun.400
      />

      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-xl">
            <img src="/Icons/Google.png" alt="Google" className="h-9 w-9" />
          </div>
          <div>
            <div className="font-semibold text-2xl">Job Title</div>
            <div className="text-lg text-mine-shaft-300">
              Google &bull; 3 Days Ago &bull; 48 Applications
            </div>
          </div>
        </div>
      </div>

      <Divider my="xl" />
      <div className="text-xl font-semibold">Submit Your Application</div>

      <div>
        <div className="mt-2 flex gap-10 [&>*]:w-1/2">
          <TextInput disabled={preview} label="Full Name" placeholder="Full Name" withAsterisk />
          <TextInput disabled={preview} label="Email" placeholder="Email" withAsterisk />
        </div>

        <div className="mt-2 flex gap-10 [&>*]:w-1/2">
          <NumberInput disabled={preview} hideControls label="Mobile No" placeholder="Enter Mobile No" withAsterisk />
          <TextInput disabled={preview} label="Personal Website" placeholder="Enter URL" withAsterisk />
        </div>

        <div className="mt-2">
          <FileInput
            disabled={preview}
            label="Resume"
            placeholder="Upload Resume"
            withAsterisk
            leftSection={<IconPaperclip stroke={2} />}
          />
        </div>

        <Textarea
          disabled={preview}
          className={`${preview ? "!text-mine-shaft-300" : ""}`}
          label="Cover Letter"
          placeholder="Cover Letter"
          withAsterisk
          autosize
          minRows={5}
        />

        <Divider my="xl" />

        {!preview ? (
          <Button variant="light" color="brightSun.4" fullWidth onClick={handlePreview}>
            Preview
          </Button>
        ) : (
          <div className="flex gap-4">
            <Button variant="outline" color="brightSun.4" fullWidth onClick={handlePreview}>
              Edit
            </Button>
            <Button
              variant="light"
              color="brightSun.4"
              fullWidth
              onClick={handleSubmit}
              disabled={submit}
            >
              Submit
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplyJobComp;
