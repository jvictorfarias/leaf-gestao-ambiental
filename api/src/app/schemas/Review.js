import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    technician_id: {
      type: String,
      required: true,
    },

    environment_id: {
      type: String,
      required: true,
    },

    annotations: {
      type: String,
      required: false,
    },

    analysis: {
      aspect: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: false,
      },
      impact: {
        name: {
          type: String,
          required: true,
        },
        desc: {
          type: String,
          required: false,
        },
        gravity: {
          type: Number,
          required: true,
        },
        cause: {
          name: {
            type: String,
            required: true,
          },
          desc: {
            type: String,
            required: false,
          },
          occurrency: {
            type: Number,
            required: true,
          },
        },
        control: {
          name: {
            type: String,
            required: true,
          },
          desc: {
            type: String,
            required: false,
          },
          actual_control: {
            type: Number,
            required: true,
          },
        },
        action: {
          name: {
            type: String,
            required: true,
          },
          desc: {
            type: String,
            required: false,
          },
          implementation: {
            type: Number,
            required: true,
          },
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Review', reviewSchema);
