function ErrorMessage({ message }) {
  return (
    <div className="status-card error" role="alert">
      {message}
    </div>
  );
}

export default ErrorMessage;
