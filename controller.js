exports.create = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Created' });
  };
  
  exports.read = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Read' });
  };
  
  exports.delete = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Deleted' });
  };
  
  exports.update = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Updated' });
  };
  