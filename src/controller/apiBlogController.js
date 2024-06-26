// import necessary modules
import * as blogService from "../services/blogService.js";
import logger from "../middleware/loggerMiddleware.js";

// create function to handle creating blogs /blogs route
export const createBlog = async (req, res) => {
  try {
    const user = req.user;
    const { title, body, description, tags } = req.body;
    const data = await blogService.createBlog(
      title,
      body,
      description,
      tags,
      user,
    );
    res.status(201).json({
      message: "Blog created",
      data,
    });
  } catch (err){
    logger.error(err)
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

export const getAllUserDraftBlogs = async (req, res) => {
  try {
    const {
      limit = 20,
      page = 1,
      order = "desc",
      orderBy = "createdAt",
    } = req.query;
    const user = req.user;
    logger.info(user);
    const data = await blogService.getAllBlogs({
      limit,
      page,
      order,
      orderBy,
      state: "draft",
      userId: user._id,
    });
    res.json({
      message: "All blogs",
      data,
    });
  } catch (err) {
    logger.error(err)
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};
// create function to handle updating blogs /blogs route
export const updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const updateFields = req.body; // This contains the fields to update

    // Check if at least one valid field is provided
    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({ message: "At least one field must be provided for update." });
    }

    // Assuming the updateBlog service updates the fields provided and handles errors internally
    const data = await blogService.updateBlog(id, updateFields);
    res.json({
      message: "Blog updated successfully",
      data,
    });
  } catch (err) {
    logger.error(err)
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};


// create function to handle delete blog via /api/blogs/${id} route
export const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.user;
    console.log(user, id)
    await blogService.deleteBlog(user, id);
    res.json({
      message: "Blog deleted successfully"
    });
  } catch (err) {
    logger.error(err)
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

// create function to handle get all blogs on /blogs route
export const getAllBlogs = async (req, res) => {
  try {
    const {
      limit = 20,
      page = 1,
      order = "desc",
      orderBy = "createdAt",
    } = req.query;
    const data = await blogService.getAllBlogs({ limit, page, order, orderBy });
    res.json({
      message: "All Blogs",
      data,
    });
  } catch (err) {
    logger.error(err)
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

// create function to handle get a single blog on /blogs route
export const getSingleBlog = async (req, res) => {
  try {
    const user = req.user;
  
    const id = req.params.id;
    const data = await blogService.getSingleBlog(id, user);
    res.json({
      message: "Blog",
      data,
    });
  } catch (err) {
    logger.error(err)
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};
