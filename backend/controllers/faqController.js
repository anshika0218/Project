const Faq = require('../models/faqModel');

// @desc Fetch all FAQs
const getFaqs = async (req, res) => {
  try {
    const faqs = await Faq.find();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching FAQs' });
  }
};

// @desc Create a new FAQ
const createFaq = async (req, res) => {
  const { question, answer } = req.body;

  try {
    const newFaq = new Faq({ question, answer });
    const savedFaq = await newFaq.save();
    res.json(savedFaq);
  } catch (error) {
    res.status(400).json({ message: 'Error creating FAQ' });
  }
};

// @desc Update a FAQ
const updateFaq = async (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;

  try {
    const updatedFaq = await Faq.findByIdAndUpdate(id, { question, answer }, { new: true });
    res.json(updatedFaq);
  } catch (error) {
    res.status(400).json({ message: 'Error updating FAQ' });
  }
};

// @desc Delete a FAQ
const deleteFaq = async (req, res) => {
  const { id } = req.params;

  try {
    await Faq.findByIdAndDelete(id);
    res.json({ message: 'FAQ deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting FAQ' });
  }
};

module.exports = {
  getFaqs,
  createFaq,
  updateFaq,
  deleteFaq,
};
