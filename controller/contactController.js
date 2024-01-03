//@desc Get all contacts
//@route GET /api/contacts
//@access public

export const getAllContacts = (req, res) => {
  res.status(200).json({ message: 'Get all contacts' });
};

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
export const getContact = (req, res) => {
  res.status(200).json({ message: 'Get this contact' });
};

//@desc Create contact
//@route POST /api/contacts
//@access public
export const createContact = (req, res) => {
  console.log('The request body is: ', req.body);
  const { firstName, lastName } = req.body;
  if (!firstName || !lastName) {
    res.status(400);
    throw new Error('All fields are mandatory');
  }
  res.status(200).json({ message: 'Create contact' });
};

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
export const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact ${req.params.id}` });
};

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
export const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact ${req.params.id}` });
};
