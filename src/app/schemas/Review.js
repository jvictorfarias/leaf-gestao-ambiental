import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema(
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

    analyze: {
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

        cause: {},
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Review', ReviewSchema);
