 $("#gfrom").submit((e) => {
        e.preventDefault();
        $.ajax({
          url: "https://script.google.com/macros/s/AKfycby0CV7J_RqTO60XeDjZHvqAPeddbCJe0c0u9umw5QPoRWLqRtzjdp-m_NGzXvYDbIqx/exec",
          data: $("#gfrom").serialize(),
          method: "post",
          success: function (response) {
            alert("Form submitted successfully");
            window.location.reload();
            //window.location.href="https://google.com"
          },
          error: function (err) {
            alert("Something went wrong");
          },
        });
      });