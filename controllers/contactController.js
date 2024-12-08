import asyncHandler from 'express-async-handler';

//@desc Create a new contact
//@route POST /api/contacts
//@access Public
export const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone, type } = req.body;

    // Check if the fields are empty
    if (!name || !email || !phone || !type) {
        res.status(400);
        throw new Error('Please fill in all fields');
    }

    res.status(200).json({
        message: 'Contact created'
    });
})

// @desc Get all contacts
// @route GET /api/contacts
// @access Public
export const getAllContacts = async (req, res) => {
    res.status(200).json({ message: 'All contacts' });
}

// @desc Get a single contact
// @route GET /api/contacts/:id
// @access Public 
export const getSingleContact = async (req, res) => {
    res.status(200).json({ message: 'Single contact ' + req.params.id });
}

// @desc Update a single contact
// @route PUT /api/contacts/:id
// @access Public
export const updateSingleContact = async (req, res) => {
    res.status(200).json({ message: 'Contact updated ' + req.params.id });
}

// @desc Delete a single contact
// @route DELETE /api/contacts/:id
// @access Public
export const deleteSingleContact = async (req, res) => { 
    res.status(200)
        .json({
            message: 'Contact deleted ' + req.params.id
        })
}