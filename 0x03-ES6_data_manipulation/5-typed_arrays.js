export default function createInt8TypedArray(length, position, value) {
  // Create a new array buffer
  const buffer = new ArrayBuffer(length);

  // Create a new DataView for the buffer
  const view = new DataView(buffer);

  // Check if the position is within the range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Write the value to the specific position in the buffer
  view.setInt8(position, value);

  // Return the DataView
  return view;
}
